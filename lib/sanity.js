import React from 'react'

// lib/sanity.js
import {
  createImageUrlBuilder,
  createPortableTextComponent,
  createPreviewSubscriptionHook,
  createCurrentUserHook,
} from 'next-sanity'
import { config } from './config'

import { CMS_COMPONENTS } from '../src/CMSComponents/index'

/**
 * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
 **/
export const urlFor = (source) => createImageUrlBuilder(config).image(source)

// Set up the live preview subscription hook
export const usePreviewSubscription = createPreviewSubscriptionHook(config)

// Set up Portable Text serialization
export const PortableText = createPortableTextComponent({
  ...config,
  // Serializers passed to @sanity/block-content-to-react
  // (https://github.com/sanity-io/block-content-to-react)
  serializers: {
    types: {
      callToAction(props) {
        return <CMS_COMPONENTS.CallToAction data={props?.node} mx='auto' />
      },
      downloadBtn(props) {
        return <CMS_COMPONENTS.DownloadBtn data={props?.node} mx='auto' />
      },
      poster(props) {
        return <CMS_COMPONENTS.Poster data={props?.node} />
      },
      block(props) {
        const style = props.node.style || 'normal'

        if (style === 'h1') {
          return (
            <h1 className={`text-4xl mb-6 font-light mt-2 md:text-6xl`}>
              {props.children}
            </h1>
          )
        }

        if (style === 'h2') {
          return (
            <h2 className='text-3xl font-light mb-4 mt-1 md:text-5xl'>
              {props.children}
            </h2>
          )
        }

        if (style === 'h3') {
          return (
            <h3 className='text-2xl font-light mb-3 mt-1'>{props.children}</h3>
          )
        }

        if (style === 'h4') {
          return (
            <h4 className='text-xl font-light mb-3 mt-1'>{props.children}</h4>
          )
        }

        if (style === 'custom') {
          return (
            <p className='text-red-600 text-base md:text-2xl '>
              {props.children}
            </p>
          )
        }

        return <p className={`mb-5 mt-1 text-base`}>{props.children}</p>
      },
    },
    marks: {
      link: ({ children, mark }) => (
        <a
          style={{
            color: '#2563EB',
            textDecoration: 'underline',
            wordBreak: 'break-all',
          }}
          href={mark.href}
        >
          {children}
        </a>
      ),
      textColor: (props) => {
        return <span className={`${props.mark.color}`}>{props.children}</span>
      },
    },
  },
})

// Helper function for using the current logged in user account
export const useCurrentUser = createCurrentUserHook(config)
