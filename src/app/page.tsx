import Image from "next/image";
import Link from "next/link";

const images = [
  "https://s3-alpha-sig.figma.com/img/5aa8/869c/bbda0f07fd8b89cc369d88d5fcc703a3?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MAS09QrKRBozUYCGhBxn0mHJLH67BgKEyR99gvGBDuc~Tg7gneKRz0FbAh7qyRw~Kf6xnhCNATyN-ZF-TPFamKUdCvkgGsyniBfQVmaOx-hXgacy4oXCbqlhYSZWZTCy-NbG2d-OB6evuKKQ4SlACep0E3MX0BUdW~CQZ8Ho4Mo6YHciLMc3wunbUA9bny-ExcnKY87aqkVySUxy14MDQMIWbLYbzptE6lAVieivyzxnNp3vgFuqFL~l66~pFqvwzyyP2y1mo6g6DC~EsupYeGNAQhKRa1tXBISr~y8upABNK8IhM~SuRUZw9XnHQSmJjS1bWNXi4CCc4GWvJ2i8rw__",
  "https://s3-alpha-sig.figma.com/img/c3ca/4d67/04223614cf84ab8586a6df65e0fb0dfd?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WhK2HDHlZm-Cve5iP2DjawcsEQKyZz9umWCQendk0Ksm~m5T3DqMfnDlMrs~3guD1pyYWhZG4f8kk9Xx8ijkCwvFaAfzSnxFSu3LH9REtekYJXGey1D-NRoaH4aqVQgPbFUbPQ1BZ0RsSY1Yw-mCy7pmBYsIJrTfSiaWFB6HeLa3UPZZJ9Y1ZjPXkPXXQA9qkQviynxPr8c7VNG0-~JZ1GDLdUN78OIxwu2uor5m-SeGYJs~FymexM3wsdGrP1C7cMeVJfLvr-fKghbYFRGX4qpYf02LAu227iKNCSxwPcMapfg7H6mWYHVBCREaqXUSjFD~nhzDgdT-sPCrkPs1DA__",
  "https://s3-alpha-sig.figma.com/img/dc24/a9a5/29e5e4faa4db17c7d72d6cea4e973f46?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DsJslVbzorXe4gQqEtOkeNc-e2xvPtYfjvxISjoSLgEoaHJoP7a7qbWpVSu59WoTTBIPcM6A5S~-oAcjz3h1XeU5uQsyx01VcPkNcDv9d91Es-Zf3PVqbmpQeu-uS8ic6ZOENxVC5H3PfAeVs5i65TaZM3fP7v10x4nyu3W7A4-LpujP60M18czWoLSYHFF~wXvSrWJIkdin7EaMMxlzSCOvxKtPbqVjM33yvVQ8iz5Wfx02ErPteyC0UsV-0h-8zMmXmxVdhkOr-gLtPcQE5i3IUepwVpsojt8XC0YTGYBgmi~N~f7v1OiPt0AEFoCvKy77laTt5mX0wkeJdGzQBw__",
  "https://s3-alpha-sig.figma.com/img/6207/346c/1535c762cc1818db768c83ffe8d29213?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WmrCwVRJhqCXo-8bT4cd98bouQpNJgMmRA0WAaKulZT7AMCzocNWbOi5sGKxZuKXgita0SlH3z8Yp6VXNwR2ySCCc855ukUK1Kh3QaaNxH0ABcV~u-2viw68qegpClsn3mxFAvIS9Ytons9Do~aKD-9G3s-mkNCO0LY5TozV~DUzANS-ysOw-RK4lXFc3dj-LbBtghp1kvy2YFYJSUuF1WXoa1ABMCLKzxh-7q5ecJDRm5QlzMydZVZ7uBTB6CwdJWAsX7N2o5F~j3FekDVQ7y6p7f9UdG03hmFdk~yxumiDVr77h5RmIEdv5-t2wOGNEjfntWaV3TdEqKC0RYFxag__",
  "https://s3-alpha-sig.figma.com/img/8a0f/1963/189e9411e2e06cb226af9a9d4e511584?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RvYfSDCG72WOo8kMPCd25bJu4sBSer4JOyK5bvOtq9gvN-y0M2PmRMv0CVR7ekkh52T02Qk1a5f-x8mgQxhgMiAINvFytoiooE8EyQluT1Am189NnPH2xMT9bCGAvWbkZnWmt0SZx9EZVgmwXr~nyk4d00krBxqTeKBfNqs3kpKsCOzTrgEEBvYdpEIoMvF5VQcfFrkOB~iekFhIfECtiWHdvIFXpNBaBqPfwJ6Mn4zQNg70xTR1NJp20l-PMawbaK2zeS8jxMAWquvWFP2MHThxLWnV8-LxY90yxyTjS2OnvygVh9q~im-4qjg2L1knU96B2UTmefyiUfG9C90aiQ__",
  "https://s3-alpha-sig.figma.com/img/5d88/2786/4aab5a36b107645f92a6c591564af8f2?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n0mHMQhSESRBmgv1RzfFr~PL2u5nrEWN-qmVHbldEKUJy048j1fo~5-zRfxua~4Lr-QSAbQaixu1l7Y6pqsANKMLQMkdzksy0pDudXX5dj6mmbTx0FWj2xPTHvpZBqw-9jAILMeHVbrXExijnft1ovkS-hp4Af8ywRxCWtu7isz0wVNFfwOZpWnH7Sfs2C8TTUUGWFVmI75dR6RoZEI1M97stVVk9xBrMXEVHyiVh0jLGoTuVPkEmvasstQDXfPRk-z9SdjgBpxqASqcbhwu-L3JkkA67bnKhzhJ4eFOeuTkpUDbe9tt7orBCxCaROLmHBrmhI4l2EjiFzlT7FvLAA__",
  "https://s3-alpha-sig.figma.com/img/1c73/2f86/95d60f6a9ea2aeab5ce6f492c1299a9e?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cJsbNpYOf1MZsMI2IyO-RWnvJgrX9hkUd8pbUkpmX1ae60rBFy37GLYX7aBrv4eXu1OEoGGewsHqv6ElCsXEa1~ir8M7VEFrCKDzi2lXfRsbwP5rdGfR2JUH1n1qJxHlfdsN9YKiXOS~p7q9OJw4eDYebKoIoDeG4JdGU0tkA1JelgsUOHpCfZllIGoVbdAXquxYKmbqQZB~Z3xD3KckoLHRP~urxC-OTmTO5B0CCrwGJ5FM1nX9zemsiPE4DI44QG91L6OHVgzMHvCe9wnI6xz3u3zvmz3o~PM50Y-yJGlt~Ii9mPBQ-fepU7h2MRHa-tGDoGYToPqHS4kIArzQkA__",
];

export default function Home() {
  return (
    <main className="container mx-auto mb-12">
      <div className="flex justify-center mt-16">
        <div className="flex flex-col items-center">
          <h1 className="text-[#202024] text-[40px] font-semibold">
            All Products
          </h1>
          <form className="flex max-w-md mt-6 border border-[#A9AAB4] rounded-[100vw] px-4 items-center">
            <input
              className="flex-grow rounded-[100vw] px-2 py-2 text-lg outline-none placeholder:text-[#A9AAB4]"
              type="text"
              placeholder="Search..."
            />
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 21L17.5001 17.5M20 11.5C20 16.1944 16.1944 20 11.5 20C6.80558 20 3 16.1944 3 11.5C3 6.80558 6.80558 3 11.5 3C16.1944 3 20 6.80558 20 11.5Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </form>
        </div>
      </div>

      <div className="mt-12">
        <div className="flex items-center justify-between">
          <p className="flex gap-4 text-sm">
            <Link href={"/"}>Home</Link> / <Link href={"/shop"}>Shop</Link>
          </p>
          <div className="flex items-center gap-8">
            <button className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
                />
              </svg>
              Filters
            </button>
            <select className="outline-none border-none bg-transparent">
              <option value={""}>Sort by latest</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 mt-5 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
        {images.map((src) => (
          <Link
            key={src}
            href={"/products/567"}
            className="rounded-3xl relative bg-[#F1F2F3]"
          >
            <Image
              src={src}
              alt=""
              width={280}
              height={310}
              objectFit="cover"
              className="w-full h-[310px] object-cover rounded-3xl"
            />

            <div className="absolute inset-0 rounded-3xl flex flex-col justify-end px-6 py-4">
              <div className="bg-white rounded-2xl p-4">
                <div className="">
                  <p className="text-xs">Blooming Delight Tote Bag</p>
                  <p className="font-semibold mt-2">N 4,800</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-8 bg-gradient-to-r from-[#CC95C0] via-[#DBD4B4] to-[#7AA1D2] rounded-3xl flex items-center justify-between pl-10 pr-14">
        <div className="font-medium">
          <p className="text-[#5F606D]">Collection</p>
          <p className="text-xl">Explore Our Diverse Range of Tote Bags</p>
          <p className="text-[#5F606D]">
            Don't miss out on our tote bag collection! You won't be
            disappointed. 🎒✨
          </p>
        </div>
        <Image
          src={
            "https://s3-alpha-sig.figma.com/img/2bcf/d172/98d5a9bba6ab2b058c6a4588a8b22ad5?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qcmeT8SH5SED0IDE8QfPD2tFuxDRg9DrKkx4HLpoWdbexcu-iuvvEZtkHvVIwkmPeeXacAHHZteXmyOHdl~GI5qgy9Z5AKdbv1mqVBfCJwEGmnBc3~Uw9dY8wAsf2jXYOir4Gw20HVRmA7T6QUiwubOMiE2XfNArDCX8rnav0tKMlQkKHuTZooZR0oTigXUGDGuFq1OWU6Atr6kS3Yj2ZmgL~RdC0x0BavHKAS4Xs7pcc8YaWM4CAMFjqXYB4zu9UlvSAYwrwrYCTWU2pCNWNojRIIJUkLFiqwz8A1wqO-TNNzTEmYo7sZKZyddRmTqvxk1MI9e6s9Ho3KLg3aZQ6g__"
          }
          alt=""
          width={84}
          height={135}
          objectFit="cover"
          className="w-[84px] h-[135px] -rotate-[38deg] object-cover -translate-y-4"
        />
      </div>

      <div className="grid md:grid-cols-2 mt-5 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
        {images.reverse().map((src) => (
          <Link
            key={src}
            href={"/products/567"}
            className="rounded-3xl relative bg-[#F1F2F3]"
          >
            <Image
              src={src}
              alt=""
              width={280}
              height={310}
              objectFit="cover"
              className="w-full h-[310px] object-cover rounded-3xl"
            />

            <div className="absolute inset-0 rounded-3xl flex flex-col justify-end px-6 py-4">
              <div className="bg-white rounded-2xl p-4">
                <div className="">
                  <p className="text-xs">Blooming Delight Tote Bag</p>
                  <p className="font-semibold mt-2">N 4,800</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
