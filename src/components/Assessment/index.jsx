import Card from "./Card";
import styles from "./style.module.scss";

import personImg from "../../assets/imgs/old_woman_home.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { getDatabase, onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
export default function Assessment() {
  const [names, setNames] = useState([]);
  const [photoProfiles, setPhotoProfiles] = useState([]);
  const [assessments, setAssessments] = useState([]);
  const [txtAssessments, setTxtAssessments] = useState([]);

  const database = getDatabase();
  const referenceNo = ref(database, `assessments`);
  const dataAssesments = () => {
    const returnBD = (snapshot) => {
      const values = snapshot.val();

      const arrayDatas = Object.entries(values);
      let namesBD = [];
      let photoProfilesBD = [];
      let assessmentsBD = [];
      let txtAssesmentsBD = [];

      arrayDatas.forEach((e,i) => {
        namesBD.push(e[1].userAssesment[0])
        photoProfilesBD.push(e[1].userAssesment[1])
        assessmentsBD.push(e[1].userAssesment[2])
        txtAssesmentsBD.push(e[1].userAssesment[3])
      });


      setNames([...namesBD])
      setPhotoProfiles([...photoProfilesBD])
      setTxtAssessments([...assessmentsBD])
      setAssessments([...txtAssesmentsBD])
    };

    onValue(referenceNo, returnBD);
  };
  useEffect(() => {
    dataAssesments();
  }, [])
  return (
    <section className={styles.assesssment__content} id="assessment">
      <h1 onClick={dataAssesments}>Avaliações</h1>
      <Swiper spaceBetween={50} slidesPerView={3}>
        {names.map((e, i) => (
          <Card
            key={i}
            personName={names[i]}
            personImg={photoProfiles[i]}
            asses={assessments[i]}
            txtAssess={txtAssessments[i]}
          ></Card>
        ))}
      </Swiper>
    </section>
  );
}
