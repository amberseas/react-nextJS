'use client';
import ImagePicker from '@/components/meals/image-picker';
import classes from './page.module.css';
import { shareMeal } from '@/lib/actions';
import MealsFormSubmit from '@/components/meals/meals-form-submit';
import { useActionState } from 'react';

export default function ShareMealPage() {
  const [state, formAction] = useActionState(shareMeal, { message: null });
  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={formAction}>
          <div className={classes.row}>
            <p>
              <label htmlFor='name'>Your name</label>
              <input
                type='text'
                id='name'
                name='name'
                defaultValue={state.payload?.creator || ''}
                required
              />
            </p>
            <p>
              <label htmlFor='email'>Your email</label>
              <input
                type='email'
                id='email'
                name='email'
                defaultValue={state.payload?.creator_email || ''}
                required
              />
            </p>
          </div>
          <p>
            <label htmlFor='title'>Title</label>
            <input
              type='text'
              id='title'
              name='title'
              defaultValue={state.payload?.title || ''}
              required
            />
          </p>
          <p>
            <label htmlFor='summary'>Short Summary</label>
            <input
              type='text'
              id='summary'
              name='summary'
              defaultValue={state.payload?.summary || ''}
              required
            />
          </p>
          <p>
            <label htmlFor='instructions'>Instructions</label>
            <textarea
              id='instructions'
              name='instructions'
              rows='10'
              required
              defaultValue={state.payload?.instructions || ''}
            ></textarea>
          </p>
          <ImagePicker name='image' />
          {state.message && <p>{state.message}</p>}
          <p className={classes.actions}>
            <MealsFormSubmit />
          </p>
        </form>
      </main>
    </>
  );
}
