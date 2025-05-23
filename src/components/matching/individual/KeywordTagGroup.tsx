'use client';

import KeywordTag from '@/components/common/KeywordTag';
import { TuningKeywords, TuningSameInterests } from '@/lib/api/matching';

interface KeywordTagGroupProps {
  keywords: TuningKeywords;
  sameInterests: TuningSameInterests;
  nickname: string;
}

export default function KeywordTagGroup({
  keywords,
  sameInterests,
  nickname,
}: KeywordTagGroupProps) {
  const keywordList = Object.values(keywords);
  const commonInterestList = Object.values(sameInterests).flat();

  return (
    <main className="space-y-4 px-4">
      <div className="mb-10 space-y-4">
        <p className="font-semibold">{nickname} 님의 키워드에요</p>
        <KeywordTag keywords={keywordList} />
      </div>

      <div className="mb-4 space-y-1.5">
        <p className="font-semibold">함께 나누는 공통 관심사에요</p>
      </div>
      {commonInterestList.length > 0 ? (
        <KeywordTag keywords={commonInterestList} variant="common" />
      ) : (
        <p className="items-center justify-center text-sm font-light text-[var(--gray-300)]">
          공통 관심사가 존재하지 않습니다.
        </p>
      )}
    </main>
  );
}
