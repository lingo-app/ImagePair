// use client

import React from "react";
import styles from "./page.module.css";
import lingo, { Kit } from "@lingo-app/node";
import Picker from "./Picker";

lingo.setup(Number(process.env.LINGO_SPACE_ID), process.env.LINGO_API_KEY as string);

export default async function Home () {

  const kits = await lingo.fetchKits();

  return (

    <main className={styles.main}>
      <Picker kits={kits} />
    </main>
  );
};
