import asyncio
from pathlib import Path
import shutil


_dir = Path(__file__).parent


class Gadjet:
    def __init__(
            self, src_dir: Path,
            dist_dir: Path,
            node_modules_dir: Path):
        self.src_dir = src_dir.resolve()
        self.dist_dir = dist_dir.resolve()
        self.node_modules_dir = node_modules_dir

    async def build(self):
        # typscript
        print('# Compile typescript to es6 modules')
        cmd = 'npx tsc -p src/'
        print(cmd)
        proc = await asyncio.create_subprocess_shell(cmd)
        await proc.communicate()
        print('Finished')

        # js bundle: gadjet.js
        print('# gadjet.js bundle')
        cmd = f"npx parcel build --no-cache --target=bundle 'src/gadjet.ts'"
        print(cmd)
        proc = await asyncio.create_subprocess_shell(cmd)
        await proc.communicate()
        print('Finished')

        print('# file-manager.js bundle')
        cmd = f"npx parcel build --no-cache " +\
            f"--dist-dir=dist/bundle/ui/file-manager/ " +\
            f"src/ui/file-manager/file-manager.ts"
        print(cmd)
        proc = await asyncio.create_subprocess_shell(cmd)
        await proc.communicate()
        print('Finished')

        print('# html-editor.js bundle')
        cmd = f"npx parcel build --no-cache " +\
            f"--dist-dir=dist/bundle/ui/html-editor/ " +\
            f"src/ui/html-editor/html-editor.ts"
        print(cmd)
        proc = await asyncio.create_subprocess_shell(cmd)
        await proc.communicate()
        print('Finished')

async def main():
    gadjet = Gadjet(
        src_dir=_dir.joinpath('src'),
        dist_dir=_dir.joinpath('dist'),
        node_modules_dir=_dir.joinpath('node_modules')
    )
    await gadjet.build()


asyncio.run(main())
