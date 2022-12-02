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

        # Copy fonts
        print('Copy fonts ...')
        src_dir = self.src_dir.joinpath('font')
        dest_dir = self.dist_dir.joinpath('font')
        shutil.copytree(
            src_dir,
            dest_dir,
            dirs_exist_ok=True,
        )
        print('Finished')

        # Copy normalize.css
        # print('Copy normalize.css')
        # src = self.node_modules_dir.joinpath('normalize.css/normalize.css')
        # dest = self.dist_dir.joinpath('normalize.css')
        # shutil.copyfile(src, dest)

        print('# Build normalize.css')
        path = _dir.joinpath(
            self.node_modules_dir,
            'normalize.css/normalize.css')
        cmd = f"npx parcel build --no-cache --target=normalize.css"
        print(cmd)
        proc = await asyncio.create_subprocess_shell(cmd)
        await proc.communicate()
        print('Finished')

        # typscript
        print('# Compile typescript to es6 modules')
        cmd = 'tsc -p src/'
        print(cmd)
        proc = await asyncio.create_subprocess_shell(cmd)
        await proc.communicate()
        print('Finished')

        # js bundle: gadjet.js
        print('# Javascript bundle')
        cmd = f"npx parcel build --no-cache --target=bundle 'src/**/*.ts'"
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
