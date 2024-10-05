export default [
  {
    group: 'Box',
    name: 'Wrapper',
    code: `
      <div className='relative w-full h-full'>
        Base Box
      </div>
    `,
  },
  {
    group: 'Box',
    name: 'Flex Row',
    code: `
      <div className='flex'>
        Flex Row Box
      </div>
    `,
  },
  {
    group: 'Button',
    name: 'Primary',
    code: `
      <Button>
        Primary Button
      </Button>
    `,
  },
  {
    group: 'Button',
    name: 'Secondary',
    code: `
      <Button variant="secondary">
        Secondary Button
      </Button>
    `,
  },
  {
    group: 'Button',
    name: 'Destructive',
    code: `
      <Button variant="destructive">
        Destructive Button
      </Button>
    `,
  },
  {
    group: 'Button',
    name: 'Outline',
    code: `
      <Button variant="outline">
        Outline Button
      </Button>
    `,
  },
  {
    group: 'Button',
    name: 'Ghost',
    code: `
      <Button variant="ghost">
        Ghost Button
      </Button>
    `,
  },
  {
    group: 'Button',
    name: 'Link',
    code: `
      <Button variant="link">
        Link Button
      </Button>
    `,
  },
  {
    group: 'Button',
    name: 'Icon',
    code: `
      <Button variant="ghost" size="icon">
        <span className="sr-only">Ghost Button</span>
        <Icon name="plus" />
      </Button>
    `,
  },
  {
    group: 'Card',
    name: 'Default',
    code: `
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
      </Card>
    `,
  },
];
