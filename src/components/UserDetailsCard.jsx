import React from "react";
import { MapPin, Globe, Briefcase, Phone, Mail, ArrowLeft } from "lucide-react";

const UserDetailsCard = ({ userDetails }) => {
  const { name, email, username, phone, website, address, company } =
    userDetails;

  return (
    <div>
      <div className="border rounded-md">
        <div className="flex flex-col p-5">
          <div>
            <h2 className="text-xl">{name}</h2>
            <span className="text-xs text-gray-500">@{username}</span>
          </div>

          <section className="mt-3">
            <div className="custom_div_one">
              <Mail className="text-blue-500 h-4 w-4" />
              <span className="custom-span">{email}</span>
            </div>

            <div className="custom_div_one">
              <Phone className="text-green-500 h-4 w-4" />
              <span className="custom-span">{phone}</span>
            </div>

            <div className="custom_div_one">
              <Globe className="text-purple-500 h-4 w-4" />
              <span className="custom-span">{website}</span>
            </div>
          </section>

          <section className="mt-5">
            <h3>Address</h3>
            <div className="custom_div_one">
              <MapPin className="text-red-500 h-4 w-4 mt-0.5" />
              <span className="custom-span">
                {address?.suite}, {address?.street}
                {address?.city}, {address?.zipcode}
              </span>
            </div>
          </section>

          <section className="mt-5">
            <h3>Company</h3>
            <div className=" flex items-start gap-2 ">
              <Briefcase className="text-yellow-500 h-4 w-4 mt-0.5" />

              <div>
                <span className="custom-span">{company?.name}</span>
                <div className="custom_div_one">
                  <span className="custom-span text-gray-500">
                    {company?.catchPhrase}
                  </span>
                </div>

                <div className="custom_div_one text-gray-500">
                  <span className="custom-span">{company?.bs}</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsCard;
