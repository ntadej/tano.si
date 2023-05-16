import type { AppProps } from 'next/app'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

import '@fortawesome/fontawesome-svg-core/styles.css'
import 'style/main.sass'

const MainApp = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />

export default MainApp
