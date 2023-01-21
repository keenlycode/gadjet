import asyncio
import shutil
from pathlib import Path
import re
import os


_dir = Path(__file__).parent


def asset():
    docs_src_dir = _dir.joinpath('docs-src')
    for path in docs_src_dir.glob('**/*'):
        path = str(path.relative_to(docs_src_dir))
        if re.search('.*\.(webm|jpg|svg|png|ttf|xml)$', path):
            src = docs_src_dir.joinpath(path)
            dest = _dir.joinpath('docs/', path)
            try:
                os.makedirs(dest.parent)
            except FileExistsError:
                pass
            shutil.copy(src, dest)



async def engrave():
    server = '0.0.0.0:8000'
    cmd = f"engrave dev docs-src docs --server={server}"
    print(cmd)
    proc = await asyncio.create_subprocess_shell(cmd)
    await proc.communicate()


async def docs():
    cmd = "npx parcel watch --no-cache --target docs " +\
        "'docs-src/**/*.(scss|js|ts)' "
    print(cmd)
    proc = await asyncio.create_subprocess_shell(cmd)
    await proc.communicate()


async def gadjet_module():
    cmd = 'npx tsc -w -p src/'
    print(cmd)
    proc = await asyncio.create_subprocess_shell(cmd)
    await proc.communicate()


async def main():
    # lib()
    asset()
    await asyncio.gather(
        gadjet_module(),
        docs(),
        engrave(),
    )

if __name__ == "__main__":
    asyncio.run(main())
