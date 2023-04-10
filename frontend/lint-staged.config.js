export default {
  '*.{ts, vue}': ['npm run lint:fix', 'npm run format'],
  '*.ts': [() => 'tsc --skipLibCheck --noEmit'],
};
