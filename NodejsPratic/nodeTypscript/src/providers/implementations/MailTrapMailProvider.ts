import { IMailProvider, IMessage } from "../IMailProvider";
import nodemailer from 'nodemailer'
import Mail from "nodemailer/lib/mailer";

export class MailtrapMailProvider implements IMailProvider{
  private transporte: Mail

  constructor(){
    this.transporte = nodemailer.createTransport({
      host: 'smtp.mailtrap.io',
      port: 2525,
      auth:{
        user: 'ce685a3d460ef5',
        pass: '9db11723f37122'
      }
    })
  }
  
  async sendMail(message: IMessage): Promise<void>{
    await this.transporte.sendMail({
      to:{
        name: message.to.name,
        address: message.to.email,
      },
      from:{
        name: message.from.name,
        address: message.from.email,
      },
      subject: message.subject,
      html: message.body,
    })
  }
}