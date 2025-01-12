import User from '#models/user'
import { createUserValidator, loginUserValidator } from '#validators/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
  public async register({ request, response }: HttpContext) {
    const payload = await request.validateUsing(createUserValidator)
    return response.status(201).json(User.create(payload))
  }

  public async login({ request, response, auth }: HttpContext) {
    const { email, password } = await request.validateUsing(loginUserValidator)
    const user = await User.verifyCredentials(email, password)

    await auth.use('web').login(user)

    return response.status(200)
  }

  public async logout({ auth, response }: HttpContext) {
    await auth.use('web').logout()
    return response.json({ message: 'Successfully logged out' })
  }

  public async getAuthenticatedUser({ auth }: HttpContext) {
    await auth.use('web').authenticate()
    return auth.use('web').user
  }
}
