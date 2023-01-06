import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 1.5rem;
`;

const Headline = styled.h3`
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 400;
  margin: 0;
`;

const SubHeadline = styled.h4`
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 400;
  margin: 0;
  padding-top: 0.5rem;

  --tw-text-opacity: 1;
  color: rgb(156 163 175/var(--tw-text-opacity));
`;

const Image = styled.img`
  width: 24rem;
  float: right;
  object-fit: scale-down;
`;

const Paragraph = styled.p`
  padding-top: 1rem;
  margin: 0;
`;

function Home() {
    return (
        <Container>
            <Headline>Welcome to Northwind Traders</Headline>
            <SubHeadline>Running on Cloudflare's D1</SubHeadline>
            <Image src="https://imagedelivery.net/4wj01aQOZZ0hemsvbxWAvA/763bcbcd-da6d-46ec-f5e1-70c1c1a33d00/public"/>

            <Paragraph>This is a demo of the Northwind dataset, running on <a className="link"
                                                                                                 href="https://workers.cloudflare.com/"
                                                                                                 target="_new">Cloudflare
                Workers</a>, and D1 - Cloudflare's newest SQL database, running on SQLite.</Paragraph>
            <Paragraph>Read our<a className="link" href="https://blog.cloudflare.com/introducing-d1"
                                                     target="_new">D1 announcement</a> to learn more about D1.</Paragraph>
            <Paragraph>This dataset was sourced from <a className="link"
                                                                           href="https://github.com/jpwhite3/northwind-SQLite3"
                                                                           target="_new">northwind-SQLite3</a>.</Paragraph>
            <Paragraph>You can use the UI to explore Supplies, Orders, Customers, Employees and
                Products, or you can use search if you know what you're looking for.</Paragraph>
        </Container>
    );
}

export default Home;
