import {
  CATEGORY_COLORS,
  DEFAULT_CATEGORY_COLORS,
} from "../../MyGardenPage.constants";
import { SectionCard } from "../SectionCard";
import type { CategoryRatioResponse } from "./CategoryRatio.mocks";
import { MOCK_CATEGORY_RATIO } from "./CategoryRatio.mocks";
import * as S from "./CategoryRatio.styled";

interface CategoryRatioProps {
  data?: CategoryRatioResponse | null;
}

export function CategoryRatio({
  data = MOCK_CATEGORY_RATIO,
}: CategoryRatioProps) {
  const ratios = data?.global_topic_ratios ?? [];

  return (
    <SectionCard title="카테고리 비율">
      <S.ChartPlaceholder>
        {ratios.length > 0 && (
          <S.ChartBarContainer>
            {ratios.map((item, i) => (
              <S.ChartBar
                key={item.category}
                $width={item.percentage}
                $color={
                  DEFAULT_CATEGORY_COLORS[item.category] ??
                  CATEGORY_COLORS[i % CATEGORY_COLORS.length]
                }
              />
            ))}
          </S.ChartBarContainer>
        )}
      </S.ChartPlaceholder>
      <S.CategoryList>
        {ratios.map((item, i) => (
          <S.CategoryItem key={item.category}>
            <S.CategoryDot
              $color={
                DEFAULT_CATEGORY_COLORS[item.category] ??
                CATEGORY_COLORS[i % CATEGORY_COLORS.length]
              }
            />
            {item.category} ({item.count}개)
          </S.CategoryItem>
        ))}
      </S.CategoryList>
    </SectionCard>
  );
}
