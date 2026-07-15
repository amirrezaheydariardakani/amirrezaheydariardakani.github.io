import { createHash } from 'node:crypto';
import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const signatures = [
  [26, 'f5acb8119f35e44ce1c8d69d20adfb0c7f2b1ab20e60b57f1b52c5859e9cce07'],
  [18, '984e055cf66c80414c76fad3aec71e93eab22e661a1f378166a12d35b68dc2b8'],
  [23, '51e73a9a342176ce15328c291b332e493b6c7ad7134db058846b8602c62825e3'],
  [20, '4efa4d45eb34b1dd0b450c2a11c395da182b430cde9dd2ffb3b77e3e91b1a1e2'],
  [24, '5f003438e013d2b5efa177b09fddf15003f8c62343438492f20759c843c7f8ca'],
  [27, '654b16d02f9dce80d7925222c128b988e1413be16e91078132609e10263bc118'],
  [5, 'ae92d26d4738223f579d483efebab12f5e473cf1ef2c097d9aecf68fc388936b'],
  [17, 'f08cc6cbc5da8f0c797b757fa857f99378d80f59a00eea9633963f815a649822'],
  [16, 'b486ee722e96d38561fc6ae34b36dc0700bd6775a81f0fec806f696d3e8999bd'],
];

async function files(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const result = [];
  for (const entry of entries) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) result.push(...await files(path));
    else if (/\.(html|xml|txt|json|js|css)$/i.test(entry.name)) result.push(path);
  }
  return result;
}

const failures = [];
for (const file of await files(fileURLToPath(new URL('../dist', import.meta.url)))) {
  const source = await readFile(file, 'utf8');
  const normalized = source.replace(/<[^>]*>/g, ' ').toLowerCase().replace(/\s+/g, ' ').trim();
  const chars = [...normalized];
  for (const [length, expected] of signatures) {
    for (let i = 0; i <= chars.length - length; i++) {
      const value = chars.slice(i, i + length).join('');
      if (createHash('sha256').update(value).digest('hex') === expected) failures.push(file);
    }
  }
}
if (failures.length) {
  console.error(`Privacy check failed in ${[...new Set(failures)].length} generated file(s).`);
  process.exit(1);
}
console.log('Privacy check passed.');
