export default function handler(req, res){
  if(req.method === 'POST'){
    const data = req.body
    // In a real app, you'd store or email the data here
    console.log('New contact request:', data)
    res.status(200).json({ ok: true, message: 'Message received' })
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
