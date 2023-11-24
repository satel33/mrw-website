import dynamic from 'next/dynamic'

const PageContent = dynamic(() => import('../pageContent'))

const DefaultContainer = ({ data }) => {
  return (
    <section
      className={`relative ${
        data?.width ?? 'max-w-screen-2xl'
      }  px-4 mx-auto py-8 ${
        'sm:' + data?.paddingTopBottom ?? 'sm:py-12'
      }  grid grid-cols-1 md:grid-cols-${data?.cols} ${
        data?.verticalGap ?? 'gap-x-7'
      } ${data?.horizontalGap ?? 'gap-y-7'} ${
        data?.alignItems ?? 'items-start'
      }`}
    >
      {data?.elements && <PageContent data={data?.elements} />}
    </section>
  )
}

export default DefaultContainer
