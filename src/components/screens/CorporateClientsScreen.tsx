import React from "react";
import Image from "next/image";
import { Typography, Container, makeStyles, Paper } from "@material-ui/core";
import { corporateBoxes, boxes } from "temporary";
import { routes } from "utils/routing";
import CustomGrid from "components/common/CustomGrid";
import Button from "components/common/Button";
import ProductCard from "components/common/ProductCard";
import BenefitItem from "components/common/BenefitItem";
import PromoCard from "components/common/PromoCard";
import { PromoCardType } from "components/common/PromoCard/types";
import CorporateClientsForm from "components/common/corporateClients/CorporateClientsForm";
import ProductModal from "components/common/ProductModal/ProductModal";
import { useModal } from "hooks";

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
  {
    id: 6,
    title: "rost",
    height: 36,
    width: 52,
  },
  {
    id: 7,
    title: "intellias",
    height: 14,
    width: 84,
  },
  {
    id: 8,
    title: "tarkett",
    height: 22,
    width: 100,
  },
  {
    id: 9,
    title: "danone",
    height: 26,
    width: 82,
  },
];

const benefits = [
  {
    id: 1,
    title: "Гнучка система знижок",
    description:
      "Пропонуємо гнучку систему знижок, що залежить від розміру замовлення. Постійним клієнтам - додаткові знижки.",
    iconPath: "/static/img/benefits-icons/money-icon.png",
  },
  {
    id: 2,
    title: "Укладення договору",
    description:
      "Наші юристи підготують договір, що гарантуватиме якісне та своєчасне виконання зобов'язань.",
    iconPath: "/static/img/benefits-icons/handshake-icon.png",
  },
  {
    id: 3,
    title: "Можливість безготівкових розрахунків",
    description:
      "Виставлення рахунку та можливість оплати через безготівковий розрахунок.",
    iconPath: "/static/img/benefits-icons/card-icon.png",
  },
  {
    id: 4,
    title: "Дизайнер у команді",
    description: "Забрендуємо наші готові дизайни або ж роздрукуємо ваш дизайн",
    iconPath: "/static/img/benefits-icons/palette-icon.png",
  },
  {
    id: 5,
    title: "Відправлення безпосереднім отримувачам",
    description: "Працівники на ремоуті? Відправимо кожен подарунок окремо",
    iconPath: "/static/img/benefits-icons/post-icon.png",
  },
];

const promoCards: PromoCardType[] = [
  {
    id: 1,
    text: "Простий конструктор для створення індивідуального подарункового боксу зі 100+ складових",
    buttonText: "Створити свій індивідуальний бокс",
    backgroundImage: "/static/image.png",
    route: routes.constructor(),
    variant: "contained",
    color: "primary",
  },
  {
    id: 2,
    text: '"Ще понад 50 топових боксів у каталозі',
    buttonText: "Перейти до каталогу",
    backgroundImage: "/static/image.png",
    route: routes.catalogue(),
    variant: "contained",
    color: "secondary",
  },
];

const useStyles = makeStyles((theme: any) => ({
  root: {
    overflow: "hidden",
    marginTop: theme.spacing(10),
    background: "linear-gradient(#FFFFFF, #F7F7F8)",
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(3),
    },
  },
  scrollContainer: {
    [theme.breakpoints.down("sm")]: {
      overflowX: "auto",
      flexWrap: "nowrap",
      ...theme.mixins.disableScrollBar,
    },
  },
  itemContainer: {
    [theme.breakpoints.down("sm")]: {
      minWidth: "80vw",
    },
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
  formContainer: {
    border: "1px dashed #EEEEEE",
    borderRadius: 8,
    padding: theme.spacing(10, 0),
  },
}));

const CorporateClientsScreen = () => {
  const classes = useStyles();
  const [showProductModal] = useModal(ProductModal);

  const handleSubmit = () => {
    console.log("Submitted");
  };

  return (
    <CustomGrid container justifyContent="center" className={classes.root}>
      <Container maxWidth="lg">
        <CustomGrid container justifyContent="center">
          <CustomGrid item xs={12}>
            <CustomGrid container spacing={4} justifyContent="center">
              <CustomGrid item xs={12}>
                <CustomGrid container spacing={3} justifyContent="center">
                  <CustomGrid item xs={12}>
                    <Typography align="center" variant="h2">
                      Корпоративні подарунки
                    </Typography>
                  </CustomGrid>
                  <CustomGrid item xs={12} md={7}>
                    <Typography align="center" variant="h6">
                      Готові створити під ваші потреби подарунки, що
                      сподобаються вашим працівникам, клієнтам або ж партнерам.
                      Індивідуальний підхід, гнучка система знижок та якісне
                      виконання зобов&apos;язань.
                    </Typography>
                  </CustomGrid>
                </CustomGrid>
              </CustomGrid>
              <CustomGrid item>
                <Button variant="contained" color="primary">
                  Написати нам
                </Button>
              </CustomGrid>
            </CustomGrid>
          </CustomGrid>
          <CustomGrid item xs={12}>
            <Image
              src="/static/img/corporate-clients-back.png"
              width={1280}
              height={723}
              layout="responsive"
              quality={100}
              alt="corporate-clients"
            />
          </CustomGrid>

          <CustomGrid item md={8} xs={12} style={{ marginTop: 24 }}>
            <CustomGrid
              container
              alignItems="center"
              justifyContent="space-around"
              xsSpacing={4}
              mdSpacing={8}
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
        </CustomGrid>
      </Container>

      <CustomGrid item xs={12} className={classes.lineContainer}>
        <Image
          src="/static/vector.svg"
          layout="fill"
          objectFit="cover"
          alt="line"
        />
      </CustomGrid>
      <Container maxWidth="lg">
        <CustomGrid container xsSpacing={5} mdSpacing={7}>
          <CustomGrid item xs={12}>
            <Typography align="center" variant="h4">
              Товари, які можна забрендувати під вас
            </Typography>
          </CustomGrid>
          <CustomGrid item xs={12}>
            <CustomGrid
              container
              xsSpacing={2}
              mdSpacing={5}
              className={classes.scrollContainer}
            >
              {corporateBoxes.map((box) => {
                const handleShowProductModal = () => {
                  showProductModal({ item: box });
                };
                return (
                  <CustomGrid
                    item
                    key={box.id}
                    className={classes.itemContainer}
                    md={4}
                  >
                    <ProductCard
                      isCorporate
                      img={box.img}
                      title={box.title}
                      description={box.description}
                      objectPosition="top"
                      onOpen={handleShowProductModal}
                    />
                  </CustomGrid>
                );
              })}
            </CustomGrid>
          </CustomGrid>
        </CustomGrid>

        <CustomGrid item xs={12} style={{ marginTop: 120 }}>
          <CustomGrid container xsSpacing={5} mdSpacing={6}>
            <CustomGrid item xs={12}>
              <Typography align="center" variant="h4">
                Наші переваги
              </Typography>
            </CustomGrid>
            <CustomGrid item xs={12}>
              <CustomGrid container justifyContent="flex-start" spacing={5}>
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

        <CustomGrid item xs={12} style={{ marginTop: 120 }}>
          <CustomGrid container xsSpacing={5} mdSpacing={6}>
            <CustomGrid item xs={12}>
              <Typography align="center" variant="h4">
                Приклади новорічних подарунків
              </Typography>
            </CustomGrid>

            <CustomGrid item xs={12}>
              <CustomGrid
                container
                xsSpacing={2}
                mdSpacing={5}
                className={classes.scrollContainer}
              >
                {boxes.map((box) => {
                  return (
                    <CustomGrid
                      item
                      key={box.id}
                      className={classes.itemContainer}
                      md={4}
                    >
                      <ProductCard
                        img={box.img}
                        title={box.title}
                        description={box.description}
                        price={box.price}
                        objectPosition="bottom"
                      />
                    </CustomGrid>
                  );
                })}
              </CustomGrid>
            </CustomGrid>
          </CustomGrid>
        </CustomGrid>

        <CustomGrid item xs={12} style={{ marginTop: 80 }}>
          <CustomGrid container xsSpacing={5}>
            {promoCards.map((card: PromoCardType) => {
              return (
                <CustomGrid key={card.id} item xs={12} md={6}>
                  <PromoCard
                    text={card.text}
                    backgroundImage={card.backgroundImage}
                    buttonText={card.buttonText}
                    route={card.route}
                    variant={card.variant}
                    color={card.color}
                  />
                </CustomGrid>
              );
            })}
          </CustomGrid>
        </CustomGrid>

        <CustomGrid item xs={12} style={{ marginTop: 120 }}>
          <CustomGrid
            container
            xsSpacing={5}
            mdSpacing={6}
            justifyContent="center"
          >
            <CustomGrid item xs={12}>
              <Typography align="center" variant="h4">
                Написати нам
              </Typography>
            </CustomGrid>
            <CustomGrid item xs={8}>
              <Paper className={classes.formContainer}>
                <CustomGrid container justifyContent="center">
                  <CustomGrid item xs={7}>
                    <CorporateClientsForm onSubmit={handleSubmit} />
                  </CustomGrid>
                </CustomGrid>
              </Paper>
            </CustomGrid>
          </CustomGrid>
        </CustomGrid>
      </Container>
    </CustomGrid>
  );
};

export default CorporateClientsScreen;
