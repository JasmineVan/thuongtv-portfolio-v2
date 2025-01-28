import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import SiteImage from "../../assets/Home/jasmine-trans.png";

const Experience = () => {
  return (
    <div className="flex justify-center py-32">
      {/* Layout 12 cols, 10 working cols */}
      <div className="w-10/12 h-auto flex flex-col items-center justify-between gap-4">
        <h1 className="text-3xl font-bold text-secondary">
          MY JOURNEY OF HAPPINESS
        </h1>
        <h1 className="text-2xl font-semibold text-primary">Experiences</h1>
        {/* List of experienc */}
        <div className="w-full flex items-start">
          <Timeline className="w-full" position="alternate">
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <div>
                  <h1 className="text-xl italic text-secondary">2015 - 2018</h1>
                  <h1 className="text-2xl font-bold text-primary">
                    Nguyen Huu Tho High school
                  </h1>
                  <p className="text-justify text-primary">
                    Nguyen Huu Tho School was officially established in 1961 and
                    has gone through many stages of development with many
                    generations of students. The school has a rich tradition of
                    nearly 60 years of history.
                  </p>
                </div>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <div>
                  <h1 className="text-xl italic text-secondary">2018 - 2022</h1>
                  <h1 className="text-2xl font-bold text-primary">
                    Ton Duc Thang University
                  </h1>
                  <p className="text-justify text-primary">
                    Ton Duc Thang University is a Vietnamese public university.
                    The school belongs to the Vietnam General Confederation of
                    Labor. The school operates under a comprehensive autonomy
                    mechanism. The school currently has a total of five campuses
                    in four different cities including City. Ho Chi Minh, Nha
                    Trang, Bao Loc and Ca Mau.
                  </p>
                </div>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <div>
                  <h1 className="text-xl italic text-secondary">2018 - 2022</h1>
                  <h1 className="text-2xl font-bold text-primary">
                    Mai House Saigon Hotel
                  </h1>
                  <p className="text-justify text-primary">
                    Mai House Saigon is a little like an elegantly furnished
                    boutique gallery. Interior spaces start your journey through
                    local culture with collections of artwork, literature and
                    artifacts. Each tells a captivating story about the locale,
                    providing historic context with fascinating tidbits of
                    information. More than a hotel, Mai House Saigon is a work
                    of art in itself, every nook lovingly embellished with
                    pieces that connect to the greater story.
                  </p>
                </div>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <div>
                  <h1 className="text-xl italic text-secondary">
                    2022 - Current
                  </h1>
                  <h1 className="text-2xl font-bold text-primary">
                    Hoang Thanh Capital & Partners Co.LTD
                  </h1>
                  <p className="text-justify text-primary">
                    Hoang Thanh Group is an investment holding company with M&A
                    and principal investments as our core businesses. Through
                    our portfolio companies our activities also extend to
                    digital solutions consultancy & development, wholesale
                    end-to-end logistics, real estate brokerage and development,
                    hospitality, and architect & interior designs.
                  </p>
                </div>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
              </TimelineSeparator>
              <TimelineContent>
                <div>
                  <h1 className="text-xl italic text-secondary">
                    To the future...
                  </h1>
                </div>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
      </div>
    </div>
  );
};

export default Experience;
