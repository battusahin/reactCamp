import React from 'react'
import { Menu, Dropdown,Image } from "semantic-ui-react";

export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://pbs.twimg.com/profile_images/1211047453761449984/Yww-hIkE_400x400.jpg" />
                <Dropdown pointing="top left" text="Batuhan">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info"/>
                        <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out"/>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}