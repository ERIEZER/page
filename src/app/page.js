"use client"

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import Image from "next/image";
import styles from "./page.module.css";

import "./components/styles/Profile.css";
import Custom_buttom from "./components/Custom_buttom";

import { profilesObj } from '@/data/profile'


export default function Home() {


  const router = useRouter();

  return (
    <div className="profiles-container">
      {Object.values(profilesObj).map((person, index) => (
        <div key={index} className="main_profile">
          <img
            className="profile-avatar"
            src={person.prof_img || "/image.jpg"}
            alt={`${person.jp_name}のプロフィール画像`}
          />

          <div className="p-5">
            <p className="profile-name">{person.jp_name},</p>

            <button className="btn"
              onClick={() => {
                router.push(`/pagedetaile/${person.id}`);
              }}
            >
              push!
            </button>
          </div>
        </div>
      ))}
    </div>
  );
} 
