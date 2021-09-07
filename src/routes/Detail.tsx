import React, {useState, useEffect} from "react";
import { useLocation, useParams, useHistory } from "react-router-dom";
import Helmet from "react-helmet";
import Loader from "../components/Loader";
import { contents } from "../components/handleData";
import { moviesApi, tvApi } from "../api";
import DetailComponents from "../components/DetailComponents";
import UseTabs  from "../components/UseTabs";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import CalcStars from "../components/CalcStars";
import noPoster from "../assets/noPosterSmall.png";

const {Container,Backdrop,Contents,Cover,DataCover,TitleRate,Rate,Data,Title,TabButton,TabMenu,ItemContainer,Item,Items,Divider,Overview,Image,ImageContainer,Stitle,Casts,Cast,Cnames,Videos,Video,Scontainer,Year
  } = DetailComponents;

const renderSwitch = (current: any) => {
    switch(current.tab) {
      case 'info':
        return <ItemContainer>
        <Items>
          <Item>
            {current.content.release_date && current.content.release_date ? current.content.release_date.substring(0, 4) : current.content.first_air_date.substring(0, 4)}
          </Item>
          <Divider>•</Divider>
          <i className="fas fa-chevron-right"></i>
          <Item>
            {current.content.runtime ? current.content.runtime : current.content.episode_run_time} min
          </Item>
          <Divider>•</Divider>
          <Item>
            {current.content.genres &&
              current.content.genres.map((genre: any, index: number) =>
                index === current.content.genres.length - 1
                  ? genre.name
                  : `${genre.name} / `
              )}
          </Item>
        </Items>
        <Overview>{current.content.overview}</Overview>
      </ItemContainer>;
      case 'production':
        return <ItemContainer>
        <Cnames>
          {current.content.production_companies.length > 0 ? current.content.production_companies.map(
            (company: any, index: number) => company &&
                (index === current.content.production_companies.length - 1
                  ? company.name
                  : `${company.name} / `)
          ) : "No Companies"}
        </Cnames>
        <Cnames>
          {current.content.production_countries.length > 0 ? current.content.production_countries.map(
            (country: any, index: number) => country &&
                (index === current.content.production_countries.length - 1
                  ? country.name
                  : `${country.name} / `)
          ) : "No Countries"}
        </Cnames>
        <Casts>
        {current.content.casts.map(
          (cast: any) => (
            <Cast key={cast.id}>
              <ImageContainer>
              <Image
              bgUrl={
                  cast.profile_path
                  ? `https://image.tmdb.org/t/p/original${cast.profile_path}`
                  : noPoster
              }
              />
              </ImageContainer>
              <Stitle>
                  {cast.name}
              </Stitle>
            </Cast>
          )
        )}
        </Casts>
    </ItemContainer>;
      case 'trailer':
        return <ItemContainer>
        <Videos>
          {current.content.videos.results.length > 0 ? 
          <Carousel showThumbs={false} showStatus={false} showIndicators={false} dynamicHeight={true}>
            {current.content.videos.results.map(
              (video: any, index: number) => (
                <Video key={video.key} title={String(index)} width="90%" height="500px" src={`https://www.youtube.com/embed/${video.key}?mute=1`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></Video>
              )
            )}
          </Carousel>
          : null}
        </Videos>
      </ItemContainer>;
      default:
        return <ItemContainer>
        <Scontainer>
            {current.content.seasons.map(
                (season: any) => (
                    <div key={season.id}>
                        <ImageContainer>
                        <Image
                        bgUrl={
                            season.poster_path
                            ? `https://image.tmdb.org/t/p/original${season.poster_path}`
                            : noPoster
                        }
                        />
                        </ImageContainer>
                        <Stitle>
                            {season.name}
                        </Stitle>
                        <Year>{season.air_date}</Year>
                    </div>
                )
            )}
        </Scontainer>
    </ItemContainer>;
    }
  };

export default function Detail() {
  
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { currentItem, changeItem } = UseTabs(0, data);
  let isMovie = useLocation().pathname.includes("/movie/");
  let history = useHistory();
  let params: any = useParams();
  let datas: any = [];
  async function getDetail() {
    
    const parsedId = parseInt(params.id);

    if (isNaN(parsedId)) {
      return history.push("/");
    }
    
    try {
      if (isMovie) {
        const { data: result } = await moviesApi.movieDetail(parsedId);
        datas = contents(result);
      } else {
        const { data: result } = await tvApi.showDetail(parsedId);
        datas= contents(result);
      } 
      setData(datas);
    } catch {
      console.log("error");
    } finally {
      setLoading(false);
    }
  }

  useEffect(
    ()=>{
      getDetail();
    }
  );
  
  return (loading ? (
    <>
      <Helmet>
        <title>Loading | FlixNet</title>
      </Helmet>
      <Loader />
    </>
  ) : <Container>
  <Helmet>
    <title>
      {data[0].content.original_title ? data[0].content.original_title : data[0].content.original_name}{" "} | FlixNet
    </title>
  </Helmet>
  <Backdrop
    bgImage={`https://image.tmdb.org/t/p/original${data[0].content.backdrop_path}`}
  />
  <Contents>
    <TitleRate>
      <Rate>
          <span role="img" aria-label="rating">
                {CalcStars(data[0].content.rating)} {data[0].content.rating}
          </span>{" "}
      </Rate>
      <Title>{data[0].content.original_title ? data[0].content.original_title : data[0].content.original_name}{data[0].content.imdb_id ? <a href={`https://www.imdb.com/title/${data[0].content.imdb_id}`} target="_blank" rel="noopener noreferrer"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1200px-IMDB_Logo_2016.svg.png" width="5%" style={{marginLeft: 1.5 + 'rem'}} alt="imdbLogo" /></a>: null}</Title>

    </TitleRate>
    <DataCover>
    <Data>
      <TabMenu>
        {data.map(
              (section: any, index: number) => (
                <TabButton key={index} blocked={section.content===undefined} current={currentItem.tab===section.tab} onClick={() => changeItem(index)}>{section.tab && section.tab.toUpperCase()}</TabButton>
        ))}
      </TabMenu>
      {renderSwitch(currentItem)}
    </Data>
    <Cover
        bgImage={
          data[0].content.poster_path
            ? `https://image.tmdb.org/t/p/original${data[0].content.poster_path}`
            : noPoster
        }
      />
      </DataCover>
  </Contents>
</Container>);
}



