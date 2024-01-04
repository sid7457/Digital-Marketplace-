import MaxWidhthWrapper from '@/components/MaxWidthWrapper'

export default function Home() {
  return (
  <MaxWidhthWrapper>
    <div className=' tailwind.config.tsscroll-py-20 mx-auto tailwind.config.tstext-center tailwind.config.tsinline-flex flex-col tailwind.config.tsplace-items-center max-w-3xl'>
      <h1 className=' tailwind.config.tstext-4xl font-bold tailwind.config.tstracking-tighter tailwind.config.tstext-gray-900 sm:tailwind.config.tstext-6xl'>
        Your marketplace for high-quality{' '}
        <span className=' tailwind.config.tstext-blue-600'>
          Digital Assets
        </span>
        .
      </h1>
      <p className=' tailwind.config.tsscroll-mt-6 tailwind.config.tstext-lg max-w-prose tailwind.config.tstext-muted-foreground'>
        Welcome to Digitital Marketplace. Every asset on our
        platform is verified by our team to ensure our
        highest quality standards.
      </p>
    </div>
  </MaxWidhthWrapper>
  )
}
