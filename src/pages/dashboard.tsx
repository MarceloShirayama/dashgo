import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import { Header } from "src/components/Header";
import { Sidebar } from "src/components/Sidebar";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const options: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      "2021-03-18T00:00:00.000Z",
      "2021-03-19T00:00:00.000Z",
      "2021-03-20T00:00:00.000Z",
      "2021-03-21T00:00:00.000Z",
      "2021-03-22T00:00:00.000Z",
      "2021-03-23T00:00:00.000Z",
      "2021-03-24T00:00:00.000Z",
    ],
  },
  fill: {
    opacity: 0.3,
    type: "gradient",
    gradient: {
      shade: "dark",
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
};

type InputSeries = {
  name: string;
  data: number[];
};

const series: InputSeries[] = [
  { name: "series-1", data: [83, 41, 59, 51, 40, 62, 79] },
];

export default function Dashboard() {
  return (
    <Flex direction={"column"} height={"100vh"}>
      <Header />
      <Flex
        width={"100%"}
        mx={"auto"}
        my={["4", "6"]}
        paddingX={["4", "6"]}
        maxWidth={1480}
        minWidth={"480"}
      >
        <Sidebar />
        <SimpleGrid
          flex={"1"}
          gap={["2", "4"]}
          minChildWidth={"320px"}
          alignItems={"flex-start"}
        >
          <Box
            padding={["6", "8"]}
            bg={"gray.800"}
            borderRadius={["6", "8"]}
            paddingBottom={["2", "4"]}
          >
            <Text fontSize={"lg"} marginBottom={["2", "4"]}>
              Inscritos da semana
            </Text>
            <Chart type="area" height={160} options={options} series={series} />
          </Box>
          <Box padding={["6", "8"]} bg={"gray.800"} borderRadius={["6", "8"]}>
            <Text fontSize={"lg"} marginBottom={["2", "4"]}>
              Taxa de abertura
            </Text>
            <Chart type="area" height={160} options={options} series={series} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
