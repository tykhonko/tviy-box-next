import React from "react";
import Image from "next/image";
import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import BenefitItem from "components/common/BenefitItem";
import CustomGrid from "components/common/CustomGrid";

const clients = [
  {
    id: 1,
    title: "johnson",
    height: 30,
    width: 166,
  },
  {
    id: 2,
    title: "bi",
    height: 34,
    width: 86,
  },
  {
    id: 3,
    title: "zakaz",
    height: 28,
    width: 100,
  },
  {
    id: 4,
    title: "bolt",
    height: 28,
    width: 48,
  },
  {
    id: 5,
    title: "nvidia",
    height: 22,
    width: 126,
  },
];

const benefits = [
  {
    id: 1,
    title: "Піклування про клієнта",
    description:
      "Не потрібно ламати голову над подарунком, адже ми це вже зробили",
    iconPath: "/static/img/benefits-icons/heart-icon.png",
  },
  {
    id: 2,
    title: "Блискавичний сервіс",
    description:
      "При оплаті до 15:00 поточного дня, ми відправимо ваш бокс вже сьогодні",
    iconPath: "/static/img/benefits-icons/flash-icon.png",
  },
  {
    id: 3,
    title: "Емоції",
    description:
      "Подарункові бокси дарують отримувачу лише найприємніші емоції. Перевірено часом",
    iconPath: "/static/img/benefits-icons/love-icon.png",
  },
  {
    id: 4,
    title: "Якість",
    description:
      "Працюємо виключно з якісними складовими, які, до того ж, класно виглядають",
    iconPath: "/static/img/benefits-icons/star-icon.png",
  },
  {
    id: 5,
    title: "Індивідуалізація",
    description:
      "Ми зробили чудовий конструктор, де ви можете створити свій власний бокс",
    iconPath: "/static/img/benefits-icons/handshake-icon.png",
  },
  {
    id: 6,
    title: "Прозорість",
    description:
      "Відкриті дані про засновника, ціни та чітко розписані умови доставки і оплати",
    iconPath: "/static/img/benefits-icons/eyes-icon.png",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: "hidden",
    marginTop: theme.spacing(10),
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(3),
    },
  },
  benefitsContainer: {
    margin: theme.spacing(20, 0),
  },
  lineContainer: {
    height: 300,
    width: "100%",
    position: "relative",
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
      height: 80,
    },
  },
}));

const AboutUsScreen = () => {
  const classes = useStyles();
  return (
    <CustomGrid className={classes.root} container>
      <CustomGrid item xs={12}>
        <Container maxWidth="lg">
          <CustomGrid container xsSpacing={3} mdSpacing={4}>
            <CustomGrid item xs={12}>
              <CustomGrid container spacing={3} justifyContent="center">
                <CustomGrid item xs={12}>
                  <Typography align="center" variant="h2">
                    Про нас
                  </Typography>
                </CustomGrid>
                <CustomGrid item xs={12} md={7}>
                  <Typography align="center" variant="h6">
                    Твій бокс – сервіс класних подарунків, які задовільняють
                    бажання будь-якої вибагливої людини. Ми вже попіклувались,
                    щоб в подарунку всі елементи чудово гармоніювали між собою
                    та створювали приємні емоції. За це можеш не хвилюватись.
                    Тисячі задоволених клієнтів це підтвердять
                  </Typography>
                </CustomGrid>
              </CustomGrid>
            </CustomGrid>

            <CustomGrid item xs={12}>
              <CustomGrid
                container
                xsSpacing={4}
                mdSpacing={10}
                justifyContent="center"
              >
                <CustomGrid item xs={6} md={3}>
                  <CustomGrid container spacing={1} justifyContent="center">
                    <CustomGrid item xs={12}>
                      <Typography align="center" variant="subtitle1">
                        відправили боксів
                      </Typography>
                    </CustomGrid>
                    <CustomGrid item xs={12}>
                      <Typography align="center" variant="h1">
                        10 000+
                      </Typography>
                    </CustomGrid>
                  </CustomGrid>
                </CustomGrid>
                <CustomGrid item xs={6} md={3}>
                  <CustomGrid container spacing={1} justifyContent="center">
                    <Grid item xs={12}>
                      <Typography align="center" variant="subtitle1">
                        робимо подарунки
                      </Typography>
                    </Grid>
                    <CustomGrid item xs={12}>
                      <Typography align="center" variant="h1">
                        3 роки
                      </Typography>
                    </CustomGrid>
                  </CustomGrid>
                </CustomGrid>
              </CustomGrid>
            </CustomGrid>
          </CustomGrid>

          <CustomGrid item xs={12}>
            <Image
              src="/static/about-us-back.png"
              width={1280}
              height={723}
              layout="responsive"
              alt="about-us"
            />
          </CustomGrid>

          <CustomGrid item xs={12} style={{ marginTop: 24 }}>
            <CustomGrid
              container
              alignItems="center"
              justifyContent="space-around"
              spacing={3}
            >
              {clients.map((client) => {
                const { id, width, height, title } = client;
                return (
                  <CustomGrid item key={id}>
                    <Image
                      src={`/static/clients/client-${title}.svg`}
                      width={width}
                      height={height}
                      alt={title}
                    />
                  </CustomGrid>
                );
              })}
            </CustomGrid>
          </CustomGrid>
        </Container>
      </CustomGrid>

      <CustomGrid item xs={12} className={classes.lineContainer}>
        <Image
          src="/static/vector.svg"
          layout="fill"
          objectFit="cover"
          alt="line"
        />
      </CustomGrid>

      <Container maxWidth="lg">
        <CustomGrid item xs={12}>
          <CustomGrid
            container
            justifyContent="space-around"
            alignItems="center"
          >
            <CustomGrid item>
              <Image
                src="/static/about-us-owner.png"
                width={500}
                height={500}
                alt="owner"
              />
            </CustomGrid>
            <CustomGrid item xs={5}>
              <Typography paragraph variant="h5">
                Про засновника
              </Typography>
              <Typography paragraph variant="body1">
                Instagram: @mg.create
              </Typography>
              <Typography paragraph variant="body1">
                Привіт! Мене звати Михайло, мені 23 і я засновник сервісу
                подарункових боксів Твій Бокс. Проект, що розпочинався на
                початку 2018 року як сезонна історія, згодом перетворився в
                спражній бізнес та став основним видом діяльності. За цей час
                встиг зібрати невелику команду і разом ми докладаємо всіх зусиль
                для вдосконалення продукту та сервісу.
              </Typography>
              <Typography paragraph variant="body1">
                Якщо в тебе є питання, скарга чи пропозиція, ти можеш написати
                мені в дірект інстаграму.
              </Typography>
              <Typography paragraph variant="body1">
                P. S. Про те, як запускався проект, до речі, також розповідаю в
                інстаграмі. Заходь, якщо цікаво дізнатися.
              </Typography>
            </CustomGrid>
          </CustomGrid>
        </CustomGrid>

        <CustomGrid item xs={12} className={classes.benefitsContainer}>
          <CustomGrid container spacing={7}>
            <CustomGrid item xs={12}>
              <CustomGrid container spacing={2} alignItems="center">
                <CustomGrid item>
                  <Typography align="left" variant="h5">
                    Чому ми?
                  </Typography>
                </CustomGrid>
                <CustomGrid item>
                  <Typography align="left" variant="h6">
                    Наша мета — дарувати приємні емоції
                  </Typography>
                </CustomGrid>
              </CustomGrid>
            </CustomGrid>

            <CustomGrid item xs={12}>
              <CustomGrid container justifyContent="center" spacing={5}>
                {benefits.map((item) => {
                  const { id, iconPath, title, description } = item;
                  return (
                    <CustomGrid item key={id} xs={6}>
                      <BenefitItem
                        img={iconPath}
                        title={title}
                        description={description}
                      />
                    </CustomGrid>
                  );
                })}
              </CustomGrid>
            </CustomGrid>
          </CustomGrid>
        </CustomGrid>
      </Container>
    </CustomGrid>
  );
};

export default AboutUsScreen;
