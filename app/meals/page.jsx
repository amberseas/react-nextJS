import MealsGrid from '@/components/meals/meals-grid';
import Link from 'next/link';

import styles from './page.module.css';
import { getMeals } from '@/lib/meals';
import { Suspense } from 'react';
import MealsLoadingPage from './loading-out';

export const metadata = {
  title: 'All Meals',
  description: 'Browse delicious meals shared by our vibrant community',
};

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

export default async function MealsPage() {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meals, created{' '}
          <span className={styles.highlight}>by you</span>
        </h1>
        <p>
          Choose your favoritr recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={styles.cta}>
          <Link href='/meals/share'>Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={styles.main}>
        <Suspense fallback={<MealsLoadingPage />}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
