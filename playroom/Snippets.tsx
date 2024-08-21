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
    name: 'Default',
    code: `
      <Button>
        Default Button
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
