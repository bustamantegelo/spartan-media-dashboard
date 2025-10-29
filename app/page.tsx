'use client';
import { DataCard } from "@/components/DataCardComponent";
import {Tabs, Tab} from "@heroui/react";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <section  className="container mx-auto">
        <h1 className="text-4xl font-bold text-center text-white mb-8">
          Day 1 (ULTRA & BEAST)
        </h1>
        <DataCard day="1"/>
        <h1 className="text-4xl font-bold text-center text-white my-8">
          Day 2 (SUPER & SPRINT)
        </h1>
        <DataCard day="2"/>
      </section>
    </main>
  );
}
