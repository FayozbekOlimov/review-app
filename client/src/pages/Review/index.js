import { useState } from "react";
import { Box, Container, Rating, Typography } from "@mui/material";
import shadows from "@mui/material/styles/shadows";
import { MainReviewContent, OverallRatingBox, StickySidebar } from "./style";
import OverallRate from "./OverallRate";
import PercentageBar from "./PercentageBar";
import Title from "../../components/Title";

const Review = () => {
  const [value, setValue] = useState(2);

  return (
    <Container maxWidth="xl" sx={{ mt: { xs: 20, md: 12 } }}>
      <Box display="flex" flexWrap="wrap">
        <StickySidebar>
          <img
            src="/images/book1.png"
            alt="book"
            width="100%"
            height="auto"
            style={{ boxShadow: shadows[6], borderRadius: "8px" }}
          />
          <Rating
            name="review-rating"
            value={value}
            onChange={(_, newValue) => {
              setValue(newValue);
            }}
            size="large"
          />
          <Typography variant="h6">Rate this Review</Typography>
        </StickySidebar>
        <MainReviewContent>
          <Typography variant="h4">Atomic Habits</Typography>
          <Typography variant="h6" fontWeight={400} fontStyle="italic">
            James Clear
          </Typography>
          <OverallRatingBox>
            <OverallRate rate={4.6} />
            <Box width="100%">
              <PercentageBar percentage={45} stars={5} />
              <PercentageBar percentage={37} stars={4} />
              <PercentageBar percentage={12} stars={3} />
              <PercentageBar percentage={3} stars={2} />
              <PercentageBar percentage={3} stars={1} />
            </Box>
          </OverallRatingBox>

          <Typography variant="body1" py={1}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
            nostrum sapiente voluptate facere obcaecati modi ea necessitatibus
            mollitia eum saepe laboriosam minus quos, quo, expedita totam illo
            debitis, vero ut quaerat non. Velit numquam voluptatibus vitae
            maxime, neque architecto qui necessitatibus soluta debitis
            voluptatum molestiae laudantium! Libero perferendis rem voluptatem.
            Non sequi dolor dolorum excepturi pariatur officia sit rerum
            provident veritatis nemo quo, laudantium maxime illo voluptates
            placeat quisquam, explicabo ea cum nostrum. Incidunt corporis ullam
            tenetur commodi explicabo minus impedit et non velit quaerat
            nesciunt quae maiores pariatur molestiae numquam labore, distinctio
            temporibus veritatis similique deleniti. Voluptatem necessitatibus
            similique autem doloremque, sequi numquam, dolorem quae dicta saepe
            doloribus temporibus perferendis nostrum. Facilis, eaque magnam
            rerum deserunt labore nihil magni, ut nesciunt assumenda quisquam,
            corporis earum voluptatum ex? Porro voluptas optio harum, veritatis
            qui nobis debitis consequatur doloribus tempore, aspernatur aliquid
            pariatur sed deleniti, amet libero eveniet labore nisi iusto facere
            illo ipsum mollitia quas repellendus. Quidem laborum sed ullam
            accusantium earum autem perspiciatis, expedita repudiandae ratione,
            minus dignissimos assumenda atque quo cupiditate mollitia
            laboriosam. Modi animi facilis eos perferendis praesentium, tempora
            veniam nobis ipsum omnis quasi quidem ea debitis delectus, non
            dignissimos doloremque eveniet consequuntur laboriosam ex pariatur?
            Tempore blanditiis commodi voluptates explicabo praesentium repellat
            expedita? Voluptates, amet? Sed, qui iusto officia odit aspernatur
            placeat culpa optio reprehenderit vel incidunt accusamus officiis
            maxime earum delectus dignissimos consequatur deserunt? Optio
            repudiandae dolorem perspiciatis dignissimos itaque quam
            necessitatibus facere cumque! Esse ipsum adipisci pariatur delectus
            magni voluptate ipsa exercitationem quisquam quia, facere totam
            labore quis inventore! Repellat unde quia doloribus, dolores maxime,
            omnis veniam nobis illum nemo repudiandae aspernatur dolorem. Ad
            facere cupiditate distinctio nihil, iste eos amet doloremque odio
            eaque itaque provident error saepe dolor repellat quasi, id corporis
            vero officiis quidem suscipit voluptate, soluta corrupti. Ullam odit
            tempora atque veniam exercitationem numquam quo aspernatur tenetur
            vel officiis nisi perferendis quia excepturi, quisquam magni illum
            minus blanditiis expedita similique sit mollitia neque eaque soluta
            accusantium. Possimus in quos optio illum ratione fugit omnis sunt
            distinctio eligendi modi perspiciatis cupiditate quidem ut
            asperiores ea molestias sed assumenda eos sit, facere incidunt
            voluptatum tempora. Eveniet eos nisi nostrum nobis cum culpa? Facere
            veritatis maxime, fugit nemo quia natus blanditiis omnis quaerat
            quisquam obcaecati iusto architecto voluptates repudiandae ducimus
            molestiae. Amet magnam quidem dolores est pariatur minus, laborum
            adipisci. Illum, asperiores! Voluptatem amet laudantium molestiae
            consequatur dignissimos ullam dicta hic expedita assumenda.
            Distinctio dolore voluptatibus dignissimos laboriosam architecto
            aspernatur suscipit ad impedit, saepe possimus dolores ratione
            sapiente, necessitatibus similique laudantium, molestiae corporis
            error expedita tempore blanditiis officiis vitae ipsum omnis
            assumenda. Ipsa assumenda molestias dignissimos reiciendis beatae
            enim voluptatibus reprehenderit ducimus distinctio esse veritatis
            modi, atque eaque voluptatum sint ratione itaque, quo sapiente.
            Excepturi, amet. Ad minima voluptas ratione, expedita laborum
            obcaecati ex necessitatibus quae illo nisi hic nulla maxime
            excepturi blanditiis molestiae provident beatae, qui doloribus animi
            tenetur dolorum. Quos neque dignissimos nostrum! Voluptatem, quo
            adipisci dicta eum fuga cumque porro omnis facilis, ipsam alias ut
            itaque quasi modi autem in sit.
          </Typography>
        </MainReviewContent>
      </Box>
      <Title variant="h4">Comments</Title>
    </Container>
  );
};

export default Review;