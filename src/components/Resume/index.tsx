import { certificates, education, workExperience } from '@/mocks/constants';
import ResumeItem from './ResumeItem';
import CompenentHeader from '@/components/CompenentHeader';
import Container from '../Container';
import { diffDate } from '@/utils/utils';

function ResumeItemSupport({ item }: { item: any }) {
  return (
    <ResumeItem href={item.href} title={item.name} header={item?.header}>
      <div className="italic mb-3 first-letter:uppercase">
        {item.descriptoin}
      </div>
      <span className="bg-thirtd px-4 py-2 font-semibold text-sm w-fit">
        {item.date}
      </span>
      <div className=" mb-3">
        <span className="font-medium">skills: </span>
        <span className=" mr-2">{item.skill.join(', ')}</span>
      </div>
    </ResumeItem>
  );
}

function Resume({ active }: { active: boolean }) {
  return (
    <Container id="resume" active={active}>
      <CompenentHeader title={'resume'} />
      <div className="sm:grid grid-cols-2 gap-4">
        <div>
          <ResumeItem title={'Batuhan tanır'} header="Summary">
            <div className="italic mb-3">
              {diffDate(new Date('2023-03-01'))} başladığım yazılım serüvenime
              şu anda Medyanes360'da staj görerek ve 42 İstanbul'da eğitim
              alarak devam ediyorum.
            </div>
            <ul className="list-disc ml-5">
              <li className="list-item">Istanbul, Turkey</li>
              <li className="list-item">batuhan.tanir00@gmail.com</li>
            </ul>
          </ResumeItem>
          {certificates.map((item, index) => (
            <ResumeItemSupport item={item} key={index} />
          ))}
        </div>
        <div>
          {education.map((item, index) => (
            <ResumeItemSupport item={item} key={index} />
          ))}
          {workExperience.map((item, index) => (
            <ResumeItemSupport item={item} key={index} />
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Resume;
