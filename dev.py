import asyncio
import shutil
from pathlib import Path


_dir = Path(__file__).parent


def lib():
    shutil.copytree(
        _dir.joinpath('dist/'),
        'docs/lib/gadjet/dist/',
        dirs_exist_ok=True)


def asset():
    shutil.copytree(
        _dir.joinpath('docs-src/asset/'),
        'docs/asset/',
        dirs_exist_ok=True,
    )


async def engrave():
    server = '0.0.0.0:8000'
    cmd = f"engrave dev docs-src docs --server={server}"
    print(cmd)
    proc = await asyncio.create_subprocess_shell(cmd)
    await proc.communicate()


async def parcel():
    cmd = "npx parcel watch --no-cache 'docs-src/**/*.(scss|js|ts|jpg|png|xml|svg)' "\
        + "--target=docs"
    print(cmd)
    proc = await asyncio.create_subprocess_shell(cmd)
    await proc.communicate()


async def gadjet_module():
    cmd = 'npx tsc -w -p src/'
    print(cmd)
    proc = await asyncio.create_subprocess_shell(cmd)
    await proc.communicate()


async def main():
    lib()
    asset()
    await asyncio.gather(
        gadjet_module(),
        parcel(),
        engrave(),
    )

asyncio.run(main())
