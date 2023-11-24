// import nodemailer from 'nodemailer'

export default async function exit(req, res) {
  // const transporter = nodemailer.createTransport({
  //   port: 465,
  //   host: 'smtp.gmail.com',
  //   auth: {
  //     user: 'demo@demo.gmail',
  //     pass: 'password',
  //   },
  //   secure: true,
  // })
  // console.log(req.body)

  return res.status(200).json({ status: 'Done' })
}
