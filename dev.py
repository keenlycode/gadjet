import asyncio
import shutil
from pathlib import Path


_dir = Path(__file__).parent


def lib():
    shutil.copytree(
        _dir.joinpath('dist/'),
        'docs/lib/gadjet/dist/',
        dirs_exist_ok=True)


async def engrave():
    cmd = "engrave dev docs-src docs --server"
    print(cmd)
    proc = await asyncio.create_subprocess_shell(cmd)
    await proc.communicate()


async def parcel():
    cmd = "npx parcel watch --no-cache 'docs-src/**/*.(scss|js|ts|jpg|png|svg|xml)'"\
        + " --target=docs"
    print(cmd)
    proc = await asyncio.create_subprocess_shell(cmd)
    await proc.communicate()


async def typescript():
    cmd = 'tsc -w -p src/'
    print(cmd)
    proc = await asyncio.create_subprocess_shell(cmd)
    await proc.communicate()


async def main():
    lib()
    await asyncio.gather(
        typescript(),
        parcel(),
        engrave(),
    )

asyncio.run(main())
