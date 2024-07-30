//#1-1. styling: 전역 css 적용
import '@/app/ui/global.css';


import { inter } from './ui/fonts'

export default function RootLayout({ children, }: { children: React.ReactNode; }) {
  return (
    <html lang="en">
      {/*32-1-2. body 태그에 inter폰트 적용 */}
      <body className={`${inter.className}`}> {children}</body>
    </html>
  );
}
