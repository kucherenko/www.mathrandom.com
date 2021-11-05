import { Context } from 'telegraf'
import { getExercise } from '../storage.service'

export async function exercise(ctx: Context) {
  const exercise = await getExercise(process.env.EXERCISE as string)
  await ctx.replyWithHTML(exercise.task)
}
