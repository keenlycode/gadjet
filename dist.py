import asyncio
from pathlib import Path


async def bundle():
    print('# bundle')
    cmd = "npx parcel build --no-cache --target bundle " +\
        "'src/**/*.bundle.js'"
    print(cmd)
    proc = await asyncio.create_subprocess_shell(cmd)
    await proc.communicate()
    print('Finished')

async def docs():
    cmd = "npx parcel build --no-cache --target docs " +\
        "'docs-src/**/*.(scss|js|ts)'"
    print(cmd)
    proc = await asyncio.create_subprocess_shell(cmd)
    await proc.communicate()


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
    await docs()


asyncio.run(main())
