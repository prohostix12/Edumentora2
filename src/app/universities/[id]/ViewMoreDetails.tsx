import React from 'react';

type UniversityWithDetails = {
  visionHeading?: string | null;
  visionPara?: string | null;
  facilitiesHeading?: string | null;
  facilitiesPara?: string | null;
  featuresHeading?: string | null;
  featuresPara?: string | null;
  whyChooseHeading?: string | null;
  whyChoosePara?: string | null;
  btechProgramsHeading?: string | null;
  btechProgramsPara?: string | null;
};

export default function AdditionalUniversityDetails({ university }: { university: UniversityWithDetails }) {
  // Check if there's any extra data to show
  const hasExtraData = 
    university.visionHeading || university.visionPara ||
    university.facilitiesHeading || university.facilitiesPara ||
    university.featuresHeading || university.featuresPara ||
    university.whyChooseHeading || university.whyChoosePara ||
    university.btechProgramsHeading || university.btechProgramsPara;

  if (!hasExtraData) {
    return null; // Don't show anything if there is no extra data
  }

  return (
    <div className="mt-10 border-t border-gray-100 pt-8">
      <div className="space-y-12">
        
        {/* Vision */}
        {(university.visionHeading || university.visionPara) && (
          <div>
            {university.visionHeading && (
              <h3 className="text-2xl font-bold text-[#172A53] mb-4">{university.visionHeading}</h3>
            )}
            {university.visionPara && (
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-wrap">
                {university.visionPara}
              </div>
            )}
          </div>
        )}

        {/* Facilities */}
        {(university.facilitiesHeading || university.facilitiesPara) && (
          <div>
            {university.facilitiesHeading && (
              <h3 className="text-2xl font-bold text-[#172A53] mb-4">{university.facilitiesHeading}</h3>
            )}
            {university.facilitiesPara && (
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-wrap">
                {university.facilitiesPara}
              </div>
            )}
          </div>
        )}

        {/* Features */}
        {(university.featuresHeading || university.featuresPara) && (
          <div>
            {university.featuresHeading && (
              <h3 className="text-2xl font-bold text-[#172A53] mb-4">{university.featuresHeading}</h3>
            )}
            {university.featuresPara && (
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-wrap">
                {university.featuresPara}
              </div>
            )}
          </div>
        )}

        {/* Why Choose */}
        {(university.whyChooseHeading || university.whyChoosePara) && (
          <div>
            {university.whyChooseHeading && (
              <h3 className="text-2xl font-bold text-[#172A53] mb-4">{university.whyChooseHeading}</h3>
            )}
            {university.whyChoosePara && (
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-wrap">
                {university.whyChoosePara}
              </div>
            )}
          </div>
        )}

        {/* B.Tech Programs */}
        {(university.btechProgramsHeading || university.btechProgramsPara) && (
          <div>
            {university.btechProgramsHeading && (
              <h3 className="text-2xl font-bold text-[#172A53] mb-4">{university.btechProgramsHeading}</h3>
            )}
            {university.btechProgramsPara && (
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-wrap">
                {university.btechProgramsPara}
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
