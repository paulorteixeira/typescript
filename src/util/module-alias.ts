import * as path from 'path';
import moduleAlias from 'module-alias';

// permite que os alias @src e @test sejam alcançados por todo o projeto
const files = path.resolve(__dirname, '../..');

moduleAlias.addAliases({
  '@src': path.join(files, 'src'),
  '@test': path.join(files, 'test'),
});
