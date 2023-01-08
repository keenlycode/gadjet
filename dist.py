import asyncio
from pathlib import Path
import shutil


_dir = Path(__file__).parent


async def bundle():
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


async def module():
    # typscript
    print('# Compile typescript to es6 modules')
    cmd = 'npx tsc -p src/'
    print(cmd)
    proc = await asyncio.create_subprocess_shell(cmd)
    await proc.communicate()
    print('Finished')


async def main():
    await asyncio.gather(
        module(),
        bundle(),
    )


asyncio.run(main())
