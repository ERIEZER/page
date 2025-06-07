// app/pagedetaile/[id]/page.tsx
import { profilesObj } from '@/data/profile';
import ProfileDetailClient from './ProfileDetailClient';

export async function generateStaticParams() {
  return Object.values(profilesObj).map((profile) => ({
    id: profile.id.toString()
  }));
}

export default function ProfileDetailPage({ params }) {
  const profile = Object.values(profilesObj)
    .find(p => p.id === Number(params.id));

  if (!profile) {
    return <p>該当するプロフィール(ID: {params.id})が見つかりません。</p>;
  }

  return <ProfileDetailClient profile={profile} />;
}
