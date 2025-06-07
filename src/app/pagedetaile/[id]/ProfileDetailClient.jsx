'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import "../../components/styles/profiledetaile.css";

export default function ProfileDetailClient({ profile }) {
  const router = useRouter();
  const goToTop = () => router.push('/');

  return (
    <div className="profile-detail-wrapper">
      <div className="profile-detail-card">
        <div className="profile-detail-header">
          <Image
            src={profile.prof_img}
            width={160}
            height={160}
            alt={`${profile.jp_name} のプロフィール画像`}
            className="profile-detail-avatar"
          />
          <h2 className="profile-detail-name">{profile.jp_name}</h2>
        </div>

        <div className="profile-detail-body">
          <p><strong>会社名：</strong>{profile.company}</p>
          <p><strong>誕生日：</strong>{profile.year}</p>
          {profile.hobby && <p><strong>趣味：</strong>{profile.hobby}</p>}
          {profile.aiming && <p><strong>目標：</strong>{profile.aiming}</p>}
          {profile.company_img && (
            <a href={profile.company_id} target="_blank" rel="noopener noreferrer">
              <Image
                src={profile.company_img}
                alt={`${profile.company} のロゴ`}
                width={120}
                height={60}
                className="company-image"
              />
            </a>
          )}
        </div>

        <div className="profile-detail-footer">
          <button className="back-button" onClick={goToTop}>
            TOPへ戻る
          </button>
        </div>
      </div>
    </div>
  );
}
