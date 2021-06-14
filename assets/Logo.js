import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

function Logo(props: SvgProps) {
  return (
    <Svg
      width={231}
      height={64}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.918 6.072C3.392 7.222-.967 13.447.184 19.974l5.888 33.39c1.15 6.527 7.375 10.885 13.902 9.734l33.39-5.888c6.527-1.15 10.885-7.374 9.734-13.901L57.21 9.919C56.06 3.391 49.836-.968 43.31.183L9.919 6.072zm39.178 31.246c1.338 7.585-4.563 13.8-13.574 15.388-9.409 1.66-16.43-1.807-17.807-9.62l-.18-1.026 7.64-1.347.152.855c.653 3.707 4.034 5.874 9.395 4.93 4.733-.835 7.44-3.488 6.786-7.195-.392-2.224-1.757-3.63-4.558-3.841l-10.908-.84c-6.316-.474-9.66-2.766-10.716-8.754-1.327-7.527 3.581-13.038 12.534-14.616 8.84-1.559 15.292 2.36 16.53 9.374l.17.97-7.356 1.297-.141-.799c-.593-3.364-3.213-5.548-8.117-4.684-4.22.744-6.655 2.938-6.042 6.416.412 2.338 1.84 3.439 4.166 3.617l11.461.978c6.145.504 9.61 3.48 10.566 8.897z"
        fill="#404CCF"
      />
      <Path
        d="M80.385 49.79c8.049 0 13.492-5.038 13.723-11.929h-7.18c-.347 2.954-2.2 5.56-6.37 5.56-4.458 0-6.543-2.896-6.543-6.95v-4.863c0-4.054 2.085-6.95 6.543-6.95 4.17 0 6.023 2.607 6.37 5.56h7.18c-.231-6.89-5.674-11.929-13.723-11.929-9.092 0-14.245 5.733-14.245 13.608v4.285c0 7.875 5.153 13.608 14.245 13.608zm25.669 0c3.474 0 7.296-1.448 8.686-3.474v2.78h7.585V29.87c0-7.006-5.153-11.58-12.681-11.58-6.486 0-11.176 3.126-12.913 8.975h7.296c.811-1.622 2.49-2.838 5.212-2.838 3.242 0 5.211 2.085 5.211 4.864v4.112c-1.39-1.158-4.053-2.548-7.643-2.548-7.239 0-12.16 3.01-12.16 9.554 0 5.849 4.632 9.381 11.407 9.381zm2.026-5.212c-3.3 0-5.79-1.62-5.79-4.4 0-2.78 2.316-4.285 6.022-4.285 3.532 0 6.138 1.563 6.138 4.227 0 2.548-2.895 4.459-6.37 4.459zm17.08 4.517h7.876V31.26c0-4.053 2.258-6.138 5.79-6.138 3.822 0 5.501 2.49 5.501 5.964v18.01h7.875V29.812c0-7.239-4.111-11.524-10.654-11.524-4.285 0-7.354 1.506-8.86 4.285v-3.59h-7.528v30.111zm29.863 0h7.875V31.26c0-4.053 2.258-6.138 5.79-6.138 3.822 0 5.501 2.49 5.501 5.964v18.01h7.876V29.812c0-7.239-4.112-11.524-10.655-11.524-4.285 0-7.354 1.506-8.86 4.285v-3.59h-7.527v30.111zm42.543.695c6.659 0 12.045-3.995 13.087-9.496h-6.891c-.753 2.084-2.837 3.821-6.196 3.821-4.574 0-6.369-3.069-6.369-6.601v-.753h19.688v-5.27c0-7.238-4.517-13.202-13.435-13.202-9.033 0-13.897 5.79-13.897 13.956v4.11c0 8.455 5.501 13.435 14.013 13.435zm-6.369-18.877c0-4.054 1.737-7.065 6.253-7.065 4.228 0 6.196 2.838 6.196 6.602v.752h-12.449v-.29zm21.458 18.182h7.875V35.198c0-6.08 2.779-8.628 7.933-8.628h1.621v-7.817h-.926c-4.517 0-8.049 1.563-9.033 6.08v-5.849h-7.47v30.111z"
        fill="#404CCF"
      />
    </Svg>
  )
}

export default Logo
