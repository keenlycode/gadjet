import asyncio


async def engrave():
    server = '0.0.0.0:8000'
    cmd = f"engrave dev docs-src docs --server={server} --asset"
    print(cmd)
    proc = await asyncio.create_subprocess_shell(cmd)
    await proc.communicate()


async def docs():
    cmd = "npm run docs-watch"
    print(cmd)
    proc = await asyncio.create_subprocess_shell(cmd)
    await proc.communicate()


async def main():
    await asyncio.gather(
        docs(),
        engrave(),
    )

if __name__ == "__main__":
    asyncio.run(main())
