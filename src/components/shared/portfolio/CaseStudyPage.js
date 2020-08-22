import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../../components/layout/layout'
import IconHelm from '../icons/IconHelm'
import IconAxes from '../icons/IconAxes'
import IconCrown from '../icons/IconCrown'
import IconMagic from '../icons/IconMagic'
import IconArrow from '../icons/IconArrow'
import IconRaidGuild from '../../../images/raidguild__icon.png'
import RaiderBox from './RaiderBox'

const CaseStudyPage = ({ caseStudy }) => (
	<Layout>
		<div className="CaseStudy">
      <div className="Hero" name="portfolio">
        <div className="Hero__Contents Grid">
					<div className="Column Column--50">
	          <h2>{caseStudy.projectName}</h2>
					  <p>{caseStudy.projectHeadline}</p>
					</div>
					<div className="Column Column--50">
						<img src={caseStudy.headerImage} />
					</div>
        </div>
        <div className="HeroBorder" />
      </div>
			<div className="Block">
	      <div className="Block__Contents">
	        <div className="Grid">
	          <div className="Column Column--50">
							<h3>The Challenge</h3>
							<p>{caseStudy.challengeText}</p>
	          </div>
	          <div className="Column Column--50">
	    				<h5>Raiders</h5>
							{
								caseStudy.raiders.map(raider => (
									<RaiderBox
										raiderName={raider.name}
										raiderRole={raider.role}
										characterImage={raider.image}
									/>
								))
							}
	          </div>
	        </div>
	      </div>
	    </div>
			<div className="Block PrimaryBG">
	      <div className="Block__Contents Contain800">
					<h2 className="IconHeader"><IconAxes />Our Approach</h2>
					<p>{caseStudy.approachText}</p>
	      </div>
	    </div>
			<div className="Block">
	      <div className="Block__Contents">
					<div className="Contain800">
						<h2 className="IconHeader"><img src={IconRaidGuild} />Our Solution</h2>
						{caseStudy.solutionTexts.map(solutionText => (<p>{solutionText}</p>))}
					</div>
					<div className="SectionSeparator">
						<hr />
					</div>
					<div className="Grid">
						<div className="CaseStudy__List Column Column--50" >
							<h4>Activities</h4>
							{caseStudy.activitiesTexts.map(activitiesText => (<span>{activitiesText}</span>))}
						</div>
						<div className="CaseStudy__List Column Column--50">
							<h4>Deliverables</h4>
							{caseStudy.deliverablesTexts.map(deliverablesText => (<span>{deliverablesText}</span>))}
						</div>
		      </div>
				</div>
	    </div>
			<div className="Block SecondaryBG">
	      <div className="Block__Contents Contain800">
					<h2 className="IconHeader"><IconMagic /> Results</h2>
					<p>{caseStudy.resultsText}</p>
					<a href={caseStudy.productLink} className="Button" rel="noopener noreferrer" target="_blank">
            View Final Product <IconArrow />
          </a>
					{ caseStudy.codeLink &&
						<a href={caseStudy.codeLink} className="Button" rel="noopener noreferrer" target="_blank">
            	View Codebase <IconArrow />
          	</a>
					}
	      </div>
	    </div>
			{ caseStudy.testimonial &&
				<div className="Block">
	      	<div className="Block__Contents Contain800 TextCenter">
						<h2 className="Secondary">Client Testimonial</h2>
						<p>{caseStudy.testimonial.text}</p>
						<code className="tag"> - {caseStudy.testimonial.clientName}, {caseStudy.testimonial.orgName} </code>
		      </div>
	    	</div>
			}
		</div>
  </Layout>
)

export default CaseStudyPage