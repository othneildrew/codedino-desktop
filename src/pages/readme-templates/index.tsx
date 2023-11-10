import { DefaultLayout } from '@/layouts/DefaultLayout'
import { Button } from '@mantine/core'
import Link from 'next/link'

export default function ReadmeTemplates() {
  const a = ''

  return (
    <DefaultLayout>
      ajsldjfsdf
      <Button component={Link} href='/readme-templates/editor'>
        Editor
      </Button>
    </DefaultLayout>
  )
}
