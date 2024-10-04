import { countriesInfo } from "../../../../type/type";
import Button from "@/app/components/Button";

const countryName = ({ params }: { params: { country_name: string } }) => {
  const countryDetail: countriesInfo[] = [
    {
      name: "pakistan",
      population: "231 million",
      capital: "Islamabad",
    },
    {
      name: "bangladesh",
      population: "170 million",
      capital: "Dhaka",
    },
    {
      name: "england",
      population: "56 million",
      capital: "London",
    },
    {
      name: "australia",
      population: "26 million",
      capital: "Canberra",
    },
    {
      name: "china",
      population: "1.4 billion",
      capital: "Beijing",
    },
  ];

  const findCountry = countryDetail.find(
    (countries) =>
      countries.name.toLowerCase() === params.country_name.toLowerCase()
  );

  if (!findCountry) {
    return (
      <h1 className="text-red-600 text-3xl font-bold">Country Not Found</h1>
    );
  }
  return (
    <>
      <div className="min-h-screen bg-gradient-to-bl from-blue-900 to-purple-900 text-white flex flex-col items-center justify-center py-20 ">
        <h1 className="text-4xl font-bold mb-8 uppercase tracking-wider">
          Countries Information!
        </h1>

        <div className="bg-white text-blue-900 rounded-lg shadow-lg p-8 max-w-lg w-full space-y-6">
          <p className="text-2xl font-semibold">
            <span className="text-purple-700">Name:</span>
            <span>{findCountry.name}</span>
          </p>
          <p className="text-2xl font-semibold">
            <span className="text-purple-700">Population:</span>
            <span>{findCountry.population}</span>
          </p>
          <p className="text-2xl font-semibold">
            <span className="text-purple-700">Capital:</span>
            <span>{findCountry.capital}</span>
          </p>
        </div>
        <div className="mt-8">
          <Button />
        </div>
      </div>
    </>
  );
};

export default countryName;
