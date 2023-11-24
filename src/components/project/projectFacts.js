// Assets
import { InfoIcon } from '../../icons/index'

const ProjectFacts = ({
  phase,
  developer,
  designer,
  architect,
  builder,
  client,
}) => {
  return (
    <section className='max-w-xl mx-auto px-4 py-8 sm:py-12'>
      <div className='border-b'>
        <div className='border-b p-2 flex items-center justify-between'>
          <p className='font-medium text-lg'>Project Facts</p>
          <InfoIcon />
        </div>
        {phase && (
          <div className='px-2 py-3 flex items-center justify-between '>
            <p>Project Phase</p>
            <p className='font-medium'>{phase}</p>
          </div>
        )}
        {client && (
          <div className='px-2 py-3 flex items-center justify-between '>
            <p>Client</p>
            <p className='font-medium'>{client?.name}</p>
          </div>
        )}
        {developer && (
          <div className='px-2 py-3 flex items-center justify-between '>
            <p>Developer</p>
            <p className='font-medium'>{developer}</p>
          </div>
        )}
        {designer && (
          <div className='px-2 py-3 flex items-center justify-between '>
            <p>Designer</p>
            <p className='font-medium'>{designer}</p>
          </div>
        )}
        {architect && (
          <div className='px-2 py-3 flex items-center justify-between '>
            <p>Architect</p>
            <p className='font-medium'>{architect}</p>
          </div>
        )}
        {builder && (
          <div className='px-2 py-3 flex items-center justify-between'>
            <p>Builder</p>
            <p className='font-medium'>{builder}</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default ProjectFacts
