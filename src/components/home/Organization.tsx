import type { CopyProps } from "@/src/data/site";
import { SectionIntro } from "@/src/components/SectionIntro";

export function Organization({ copy }: CopyProps) {
  const org = copy.organization;
  const websiteText = org.website.replace(/^https:\/\//, "");

  return (
    <section id="organization" className="section section-ivory" aria-labelledby="organization-title">
      <div className="wrap">
        <SectionIntro kicker={org.kicker} title={org.title} titleId="organization-title" />
        <dl className="org-list">
          <div>
            <dt>{org.nameLabel}</dt>
            <dd>{org.name}</dd>
          </div>
          <div>
            <dt>{org.organizationLabel}</dt>
            <dd>{org.organization}</dd>
          </div>
          <div>
            <dt>{org.designationLabel}</dt>
            <dd>{org.designation}</dd>
          </div>
          <div>
            <dt>{org.phoneLabel}</dt>
            <dd>
              <a href={org.phoneHref}>{org.phone}</a>
            </dd>
          </div>
          <div>
            <dt>{org.emailLabel}</dt>
            <dd>
              <a href={`mailto:${copy.contactEmail}`}>{copy.contactEmail}</a>
            </dd>
          </div>
          <div>
            <dt>{org.addressLabel}</dt>
            <dd>{org.address}</dd>
          </div>
          <div>
            <dt>{org.websiteLabel}</dt>
            <dd>
              <a href={org.website}>{websiteText}</a>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
