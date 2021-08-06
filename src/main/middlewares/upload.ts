import env from '../config/env'
import { Request, Response, NextFunction } from 'express'
import multer from 'multer'
import path from 'path'
import crypto from 'crypto'
import { InvalidParamError } from '../../presentation/errors'

const storage = multer.diskStorage({

  destination: (req: Request, res: Response, next: NextFunction): void => {
    next(null, path.resolve(__dirname, '..', '..', '..', 'public'))
  },

  filename: (req: Request, res: Response, next: NextFunction): void => {
    crypto.randomBytes(16, (err, hash) => {
      if (err) next(err)
      res.key = `${hash.toString('hex')}-${res.originalname}`
      res.location = `${env.uri}/public/${res.key}`
      next(null, res.key)
    })
  }

})

const imageUpload = {

  dest: path.resolve(__dirname, '..', '..', '..', 'public'),
  storage,
  limits: { fileSize: 2 * 1024 * 1024 },

  fileFilter: (req: Request, res: Response, next: NextFunction): void => {
    const allowedMimes = ['image/jpg', 'image/jpeg', 'image/png', 'image/webp', 'image/svg']
    if (allowedMimes.includes(res.mimetype)) {
      next(null, true)
    } else {
      next(new InvalidParamError('file'), false)
    }
  }

}

export const upload = multer(imageUpload).single('file')
